# `person_right_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_right_detail_id | int(11) | NO | PRI | 0 |  |  |
| person_id | int(11) | YES | MUL | NULL |  |  |
| ofc_office_name | varchar(200) | YES |  | NULL |  |  |
| ofc_office_location | varchar(250) | YES |  | NULL |  |  |
| ofc_office_original_affiliation | varchar(200) | YES |  | NULL |  |  |
| employer_account_no | varchar(50) | YES |  | NULL |  |  |
| employer_office_name | varchar(200) | YES |  | NULL |  |  |
| employer_office_location | varchar(200) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_person_id | person_id | no | 1 |
| PRIMARY | person_right_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
