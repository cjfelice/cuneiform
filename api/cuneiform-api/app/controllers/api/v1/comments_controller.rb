module Api
  module V1
    class CommentsController < ApplicationController
      # protect_from_forgery with: :null_session

      def index
        comments = Comment.all

        render json: CommentSerializer.new(comments, options).serialized_json
      end
      
      def show
        comment = Comment.find_by(params[:id])
        render json: CommentSerializer.new(comment, options).serialized_json
      end
      
      def create
        comment = Comment.new(comment_params)
        
        if comment.save
          render json: CommentSerializer.new(comment).serialized_json
        else
          render json: { error: comment.errors.messages }, status: 422
        end

      end

      def update
        comment = Comment.find_by(params[:id])
        
        if comment.update(comment.params)
          render json: CommentSerializer.new(comment, options).serialized_json
        else
          render json: { error: comment.errors.messages }, status: 422
        end

      end

      def destroy
        comment = Comment.find_by(params[:id])
        
        if comment.destroy
          head :no_content
        else
          render json: { error: comment.errors.messages }, status: 422
        end

      end

      private

      def comment_params
        params.require(:comment)
      end

      def options 
        @options ||= { include: %i[]}
      end
    end
  end
end
