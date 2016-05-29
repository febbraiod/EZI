module Api
  module V1
    class NotesController < ApplicationController

      def index
        binding.pry
        @notes = Note.where(vehicle_id: (params['vehicle_id'].to_i))
        render json: @notes
      end

      def show
        @note = Note.find_by(id: params[:id])
        render json: @note
      end

      def create
        @note = Note.new(note_params)
        @note.user = current_user
        if @note.save 
          render json: @note
        end 
      end

      def update 
        @note = Note.find_by(id: params[:id])
        if @note.update(note_params) 
          render json: @note
        end 
      end

      def destory 
        respond_with Note.destroy(params[:id]) # not sure about this
      end


      private

      def note_params
        params.require(:note).permit(:user_id, :vehicle_id, :content)
      end


    end
  end
end
