# `ipd_nurse_note_vt`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipd_nurse_note_vt_id | int(11) | NO | PRI | 0 |  |  |
| nurse_note_id | int(11) | YES | MUL | NULL |  |  |
| nurse_note_time | time | YES |  | NULL |  |  |
| temperature | double(15,1) | YES |  | NULL |  |  |
| pulse | int(11) | YES |  | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_nurse_note_id | nurse_note_id | no | 1 |
| PRIMARY | ipd_nurse_note_vt_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
