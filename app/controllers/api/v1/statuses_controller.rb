module Api
  module V1
    class StatusesController < ApplicationController

      # not sure if i need this index action, but i don't want to delete it in case i get an error.
      # I think rendering groups of notes is handled entirely through the vehicle

      def index
        respond_with Status.all
      end

      def create
        # i hate using vehicle like this as it cant be the StatusesControllers 
        # responiblity to deal with vehicles but i couldn't find another way to 
        # set up the assocition when creating a status
        v = Vehicle.find(status_params[:vehicle_id])
        v.build_status(status_params)
        v.status.user = current_user
        binding.pry
        if v.save
          binding.pry
          Note.note_for_status(v.status)
          #might need to reassign vehicle status for the has_one relationship here
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
