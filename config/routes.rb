Rails.application.routes.draw do
  resources :messages
  get 'home/index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "home#index"
  namespace :api do
    get 'random_greeting', to: 'greetings#random_greeting'
  end
end
