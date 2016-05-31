module Api
  module V1
    class UsersController < ApplicationController

      def index
        @users = User.all
        render json: @users
      end

      def show
        @user = User.find_by(name: params[:id])
        # this is so the route will display the name
        # for angular $resource to work it has to be passed as 'id'
        render json: @user
      end

    end
  end
end
