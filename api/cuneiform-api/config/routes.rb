Rails.application.routes.draw do
  root 'pages#index'

  namespace :api do
    namespace :v1 do 

      resources :users
      resources :canvases, only: [:index, :show, :create, :update, :destroy]
      resources :images, only: [:index, :show, :create, :update, :destroy]
      resources :comments, only: [:index, :show, :create, :update, :destroy]
      resources :videos, only: [:index, :show, :create, :update, :destroy]
      resources :likes, only: [:index, :show, :create, :update, :destroy]
    end
  end 

  get '*path', to: 'pages#index', via: :all
end
