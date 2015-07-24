Rails.application.routes.draw do

  resource :one, only: [:show]
  resource :two, only: [:show]
  root to: "ones#show"
end
