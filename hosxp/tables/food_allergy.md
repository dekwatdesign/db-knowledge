# `food_allergy`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| food_allergy_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| agent | varchar(250) | YES |  | NULL |  |  |
| symptom | varchar(250) | YES |  | NULL |  |  |
| reporter | varchar(250) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| allergy_note | text | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| sct_disorder_id | varchar(18) | YES |  | NULL |  |  |
| sct_disorder_desc | varchar(250) | YES |  | NULL |  |  |
| sct_substance_id | varchar(18) | YES |  | NULL |  |  |
| sct_substance_desc | varchar(250) | YES |  | NULL |  |  |
| hl7_severity_id | varchar(18) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hn | hn | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | food_allergy_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
