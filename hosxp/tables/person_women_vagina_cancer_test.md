# `person_women_vagina_cancer_test`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_women_vagina_cancer_test_id | int(11) | NO | PRI | 0 |  |  |
| person_women_id | int(11) | YES |  | NULL |  |  |
| test_date | date | YES |  | NULL |  |  |
| test_result | varchar(25) | YES |  | NULL |  |  |
| vagina_cancer_test_id | int(11) | YES |  | NULL |  |  |
| vagina_test_place_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| vagina_cancer_result_id | int(11) | YES |  | NULL |  |  |
| note_text | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | person_women_vagina_cancer_test_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
