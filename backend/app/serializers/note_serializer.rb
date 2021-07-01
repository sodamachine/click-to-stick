class NoteSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :status, :position
end
