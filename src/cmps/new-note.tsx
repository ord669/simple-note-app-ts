import { NoteData, Tag } from "../App";
import { NoteForm } from "./note-form";

type NewNoteProps = {
    onSubmit: (data: NoteData) => void
    onAddTag: (tag: Tag) => void
    availableTags: Tag[]

}

export function NewNote({ onSubmit, onAddTag, availableTags }: NewNoteProps) {

    return (
        <section className='new-note'>
            <h1 className="mb-4">New Notes</h1>
            <NoteForm
                onSubmit={onSubmit}
                onAddTag={onAddTag}
                availableTags={availableTags}
            />
        </section>
    )
}