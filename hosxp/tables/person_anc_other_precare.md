# `person_anc_other_precare`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_anc_other_precare_id | int(11) | NO | PRI | 0 |  |  |
| person_anc_id | int(11) | YES | MUL | NULL |  |  |
| precare_date | date | YES | MUL | NULL |  |  |
| precare_hospcode | varchar(9) | YES |  | NULL |  |  |
| precare_no | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| anc_result | int(11) | YES |  | NULL |  |  |
| precare_note_text | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_person_anc_id | person_anc_id | no | 1 |
| ix_precare_date | precare_date | no | 1 |
| PRIMARY | person_anc_other_precare_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
