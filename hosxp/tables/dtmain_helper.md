# `dtmain_helper`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dtmain_helper_id | int(11) | NO | PRI | 0 |  |  |
| dtmain_id | int(11) | YES | MUL | NULL |  |  |
| doctor_code | varchar(15) | YES |  | NULL |  |  |
| doctor_note_text | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_dtmain_id | dtmain_id | no | 1 |
| PRIMARY | dtmain_helper_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
