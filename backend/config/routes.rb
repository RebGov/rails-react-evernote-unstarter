Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :users, only: [:create]
      post '/login', to: 'auth#create'
      post '/create', to: 'users#create'
      get '/profile', to: 'users#profile'
      resources :notes, only: [:create, :read, :update, :delete, :search]
      get'/notes', to: 'notes#index'
      resources :photos, only: [:create, :read, :update, :delete]


    end
  end
end
