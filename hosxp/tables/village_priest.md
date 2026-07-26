# `village_priest`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| village_priest_id | int(11) | NO | PRI | 0 |  |  |
| village_temple_id | int(11) | YES | MUL | NULL |  |  |
| person_id | int(11) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| village_priest_type_id | int(11) | YES |  | NULL |  |  |
| village_priest_rank_id | int(11) | YES |  | NULL |  |  |
| ordain_year | int(11) | YES |  | NULL |  |  |
| priest_note_text | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_unique | person_id | yes | 1 |
| ix_village_temple_id | village_temple_id | no | 1 |
| PRIMARY | village_priest_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
