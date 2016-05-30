module Api
  module V1
    class NotesController < ApplicationController

      # not sure if i need this index action, but i don't want to delete it in case i get an error.
      # I think rendering groups of notes is handled entirely through the vehicle

      # def index
      #   binding.pry
      #   @notes = Note.where(vehicle_id: (params['vehicle_id'].to_i))
      #   render json: @notes
      # end


      def create
        @note = Note.new(note_params)
        @note.user = current_user
        if @note.save 
          render json: @note
        end 
      end

      def destroy
        respond_with Note.destroy(params[:id]) # not sure about this but it worked
      end


      private

      def note_params
        params.require(:note).permit(:user_id, :vehicle_id, :content)
      end


    end
  end
end
