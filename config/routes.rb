Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :pins, only: [:index, :new, :create, :show, :edit, :update, :destroy] do
    member do
      put "like", to: "pins#upvote"
    end
  end

  root 'pins#index'
end
