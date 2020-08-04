module Api
  module V1
    class CanvasesController < ApplicationController
      # protect_from_forgery with: :null_session

      def index
        canvases = Canvase.all

        render json: CanvaseSerializer.new(canvases, options).serialized_json
      end
      
      def show
        canvase = Canvase.find_by(params[:id])
        render json: CanvaseSerializer.new(canvase, options).serialized_json
      end
      
      def create
        canvase = Canvase.new(canvase_params)
        
        if canvase.save
          render json: CanvaseSerializer.new(canvase).serialized_json
        else
          render json: { error: canvase.errors.messages }, status: 422
        end

      end

      def update
        canvase = Canvase.find_by(params[:id])
        
        if canvase.update(canvase.params)
          render json: CanvaseSerializer.new(canvase, options).serialized_json
        else
          render json: { error: canvase.errors.messages }, status: 422
        end

      end

      def destroy
        canvase = Canvase.find_by(params[:id])
        
        if canvase.destroy
          head :no_content
        else
          render json: { error: canvase.errors.messages }, status: 422
        end

      end

      private

      def canvase_params
        params.require(:canvase)
      end

      def options 
        @options ||= { include: %i[]}
      end
    end
  end
end
