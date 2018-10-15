class Api::V1::UsersController < ApplicationController
  skip_before_action :check_authentication, only: [:create]

  def create
    user = User.create(user_params)
    render json: {
      user: user,
      token: encode_token({ user_id: user.id })
    }
    # }/user: user serializer.new ?
  end

  def profile
    render json: current_user
  end

  private

  def user_params
    params.permit(:id, :username, :bio, :password, :avatar)
  end
end
