Rails.application.routes.draw do
  
  devise_for :users
  root 'application#index'

  get 'vehicles/upload' => 'data#upload'
  post 'vehicles/import' => 'data#import'

  namespace :api, defaults:{format: :json} do
    namespace :v1 do
      resources :vehicles
    end
  end
end
