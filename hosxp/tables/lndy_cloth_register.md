# `lndy_cloth_register`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lndy_cloth_register_id | int(11) | NO | PRI | 0 |  |  |
| lndy_cloth_register_note | varchar(200) | YES |  | NULL |  |  |
| lndy_cloth_register_date | datetime | YES |  | NULL |  |  |
| lndy_cloth_register_staff | varchar(40) | YES |  | NULL |  |  |
| lndy_cloth_register_refer_bill | varchar(100) | YES |  | NULL |  |  |
| lndy_cloth_accept_char | char(1) | YES |  | NULL |  |  |
| depcode | char(3) | YES |  | NULL |  |  |
| lndy_cloth_register_employee | varchar(6) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | lndy_cloth_register_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
