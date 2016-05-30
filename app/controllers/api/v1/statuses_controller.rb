module Api
  module V1
    class StatusesController < ApplicationController

      # not sure if i need this index action, but i don't want to delete it in case i get an error.
      # I think rendering groups of notes is handled entirely through the vehicle

      def index
        respond_with Status.all
      end


      def create
        @status = Status.new(status_params)
        @status.user = current_user
        if @status.save 
          render json: @status
        end 
      end

      def destroy
        respond_with Status.destroy(params[:id])
      end


      private

      def note_params
        params.require(:note).permit(:user_id, :vehicle_id, :status)
      end


    end
  end
end
