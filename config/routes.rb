Rails.application.routes.draw do
  
  root 'application#index'

  get 'vehicles/upload' => 'data#upload'
  post 'vehicles/import' => 'data#import'

  namespace :api, defaults:{format: :json} do
    namespace :v1 do
      resources :vehicles
    end
  end
end
