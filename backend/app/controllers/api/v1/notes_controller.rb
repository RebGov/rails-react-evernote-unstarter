class Api::V1::NotesController < ApplicationController
  # before_action :find_note
  def index
    @notes = Notes.all
  end
  def show
    @note = Note.find(params[:id])
    render json: @note
  end

  def create
    @note = Note.new(note_params)
    if @note.valid?
      render json: @note, status: :accepted
    else
      render json: @note.errors
      # { errors: @note.errors.full_messages }, status: :unprocessible_entity
    end
  end

  # def delete
  # end

  private
  def game_params
    params.require(:note).permit(:title, :content, :location)
  end

  def find_note
   @note = Note.find(params[:id])
   # note = Note.find(params[:id, :title, :location])
  end


end

# concept of using images through active-storage 
# def create
# @article = Article.create!(article_params)
# respond_to do |format|
# if @article.save
# format.html { redirect_to @article, notice: 'Article was successfully created.' }
# else
# format.html { render :new }
# end
# end
# end
# private
# def article_params
# params.require(:article).permit(:title, images: [])
# end
# end
#
