class VehiclesController < ApplicationController
  require 'csv'

  def index
    @vehicles = Vehicle.all
  end

  def upload
  end

  def import
    binding.pry
    Vehicle.import(params[:file], params[:new_or_used])
    flash[:message] = "File Uploaded"
    redirect_to vehicles_upload_path
  end

end
