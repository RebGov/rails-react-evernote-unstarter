class Api::V1::AuthController < ApplicationController

  skip_before_action :check_authentication, only: [:create]
    def create
      user = User.find_by(username: params[:username])
      if user && user.authenticate(params[:password])
# defining your token here
        render json: {
          user: user,
          token: encode_token({ user_id: user.id })
        }
      else
        render json: {
          error: "Username or password are incorrect"
        }
      end
    end
end
