class NoteSerializer < ActiveModel::Serializer
  attributes :id, :user, :content, :created_at

  def user
    if object.user_id
      User.find(object.user_id).name
    else
      "Unknown"
    end
  end

end
