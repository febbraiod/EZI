module Api
  module V1
    class VehiclesController < ApplicationController

      def index
        @vehicles = Vehicle.all
        render json: @vehicles
      end

    end
  end
end