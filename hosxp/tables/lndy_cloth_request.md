# `lndy_cloth_request`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lndy_cloth_request_id | int(11) | NO | PRI | 0 |  |  |
| lndy_cloth_request_date | datetime | YES |  | NULL |  |  |
| lndy_cloth_request_staff | varchar(40) | YES |  | NULL |  |  |
| lndy_dispense_status_id | int(11) | YES | MUL | NULL |  |  |
| depcode | char(3) | YES |  | NULL |  |  |
| lndy_cloth_accept_char | char(1) | YES |  | NULL |  |  |
| lndy_cloth_request_employee | varchar(6) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_lndy_dispense_status_id | lndy_dispense_status_id | no | 1 |
| PRIMARY | lndy_cloth_request_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
