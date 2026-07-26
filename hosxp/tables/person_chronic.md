# `person_chronic`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_chronic_id | int(11) | NO | PRI | 0 |  |  |
| person_id | int(11) | YES |  | NULL |  |  |
| clinic | char(3) | YES |  | NULL |  |  |
| regdate | date | YES |  | NULL |  |  |
| clinic_member_status_id | int(11) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| discharge_date | date | YES |  | NULL |  |  |
| chronic_discharge_status_id | int(11) | YES |  | NULL |  |  |
| discharge | char(1) | YES |  | NULL |  |  |
| icd10 | varchar(9) | YES |  | NULL |  |  |
| begin_year | int(11) | YES |  | NULL |  |  |
| chronic_note | varchar(200) | YES |  | NULL |  |  |
| dx_date | date | YES |  | NULL |  |  |
| dx_hospcode | varchar(9) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | person_chronic_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
