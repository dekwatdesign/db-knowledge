# `village_market_survey`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| village_market_survey_id | int(11) | NO | PRI | 0 |  |  |
| village_market_type_id | int(11) | YES |  | NULL |  |  |
| village_market_owner_name | varchar(250) | YES |  | NULL |  |  |
| village_market_location | varchar(250) | YES |  | NULL |  |  |
| training_pass | char(1) | YES |  | NULL |  |  |
| standard_pass | char(1) | YES |  | NULL |  |  |
| standard_score | int(11) | YES |  | NULL |  |  |
| phone | varchar(150) | YES |  | NULL |  |  |
| village_market_name | varchar(250) | YES |  | NULL |  |  |
| village_market_standard_type_id | int(11) | YES |  | NULL |  |  |
| remark | varchar(250) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hospcode | char(5) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hospcode | hospcode | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | village_market_survey_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
