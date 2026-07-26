# `dt_pedia_radiographic`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_pedia_radiographic_id | int(11) | NO | PRI | 0 |  |  |
| dt_pedia_radiographic_note | text | YES |  | NULL |  |  |
| doctorcode | varchar(5) | YES | MUL | NULL |  |  |
| dt_pedia_main_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refdt_pedia_main14 | dt_pedia_main_id | no | 1 |
| ix_Refdt_pedia_radio_person50 | doctorcode | no | 1 |
| PRIMARY | dt_pedia_radiographic_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
