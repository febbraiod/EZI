module Api
  module V1
    class VehiclesController < ApplicationController

      def index
        @vehicles = Vehicle.all
        render json: @vehicles
      end

      def show
        @vehicle = Vehicle.find_by(id: params[:id])
        render json: @vehicle
      end

      def create
        if params[:vehicle]
          @vehicle = Vehicle.new(vehicle_params)
          @vehicle.build_status(user_id: 1, vehicle_status: 'Available')
        else
          binding.pry
          @vehicle = Vehicle.new(angular_vehicle_params)
          @vehicle.build_status(user_id: 1, vehicle_status: 'Available')
        end
        if @vehicle.save 
          render json: @vehicle
        end 
      end

      def update 
        binding.pry
        @vehicle = Vehicle.find_by(id: params[:id])
        if @vehicle.update(angular_vehicle_params) 
          render json: @vehicle
        end 
      end


      private

      def vehicle_params
        params.require(:vehicle).permit(:stock_no, :year, :make, :model, :VIN, 
                                        :odometer, :msrp, :dealer_price, :color,
                                        :interior_color, :photo_url_list, :engine,
                                        :drive_train, :fuel, :body_type, :options,
                                        :transmission, :new_or_used, :storage, 
                                        :delivered, :invoice)
      end

      def angular_vehicle_params
        params.permit(:stock_no, :year, :make, :model, :VIN, 
                      :odometer, :msrp, :dealer_price, :color,
                      :interior_color, :photo_url_list, :engine,
                      :drive_train, :fuel, :body_type, :options,
                      :transmission, :new_or_used, :storage, 
                      :delivered, :invoice)
      end


    end
  end
end
