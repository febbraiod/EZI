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

    end
  end
end