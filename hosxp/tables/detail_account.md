# `detail_account`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| UserID | varchar(50) | YES |  | NULL |  |  |
| class | double(15,2) | YES |  | NULL |  |  |
| to_retaliate | double(15,2) | YES |  | NULL |  |  |
| to_risk | double(15,2) | YES |  | NULL |  |  |
| help_child | double(15,2) | YES |  | NULL |  |  |
| to_treat | double(15,2) | YES |  | NULL |  |  |
| rent_home | double(15,2) | YES |  | NULL |  |  |
| child_educated | double(15,2) | YES |  | NULL |  |  |
| money_position | double(15,2) | YES |  | NULL |  |  |
| goverment_bank | double(15,2) | YES |  | NULL |  |  |
| tax | double(15,2) | YES |  | NULL |  |  |
| gpf_gratuity | double(15,2) | YES |  | NULL |  |  |
| to_help_die | double(15,2) | YES |  | NULL |  |  |
| credit_saving_bank | double(15,2) | YES |  | NULL |  |  |
| life_insurance | double(15,2) | YES |  | NULL |  |  |
| insurance | double(15,2) | YES |  | NULL |  |  |
| off_country | double(15,2) | YES |  | NULL |  |  |
| credit_car | double(15,2) | YES |  | NULL |  |  |
| valve_all | double(15,2) | YES |  | NULL |  |  |
| social_secure | double(15,2) | YES |  | NULL |  |  |
| total | double(15,2) | YES |  | NULL |  |  |
| mouth | varchar(2) | YES |  | NULL |  |  |
| syear | varchar(4) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
