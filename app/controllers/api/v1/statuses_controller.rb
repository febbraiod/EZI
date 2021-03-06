module Api
  module V1
    class StatusesController < ApplicationController

      def index
        respond_with Status.all
      end

      def create
        # i hate using vehicle like this as it cant be the StatusesControllers 
        # responiblity to deal with vehicles but i couldn't find another way to 
        # set up the associations properly when creating a status
        v = Vehicle.find(status_params[:vehicle_id])
        prev_status = v.status
        v.build_status(status_params)
        v.status.user = current_user
        if v.save
          prev_status.destroy #this is so I can query a User instance for it's statuses 
                              #and only get active statuses not every status they ever set
          Note.note_for_status(v.status)
          render json: v.status
        end 
      end

      def destroy
        respond_with Status.destroy(params[:id])
      end


      private

      def status_params
        params.require(:status).permit(:user_id, :vehicle_id, :vehicle_status)
      end


    end
  end
end
