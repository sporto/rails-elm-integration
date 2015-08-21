Rails.application.routes.draw do

  resources :pages, only: [:show]
  root to: "pages#index"

end
