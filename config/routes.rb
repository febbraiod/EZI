Rails.application.routes.draw do
  
  root 'application#angular'

  devise_for :users

  get 'vehicles/upload' => 'data#upload'
  post 'vehicles/import' => 'data#import'

  namespace :api, defaults:{format: :json} do
    namespace :v1 do
      resources :vehicles
      resources :notes, only: [:create, :destroy]
      resources :statuses
      resources :users
    end
  end
end
