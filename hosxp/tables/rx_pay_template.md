# `rx_pay_template`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| rx_pay_template_id | int(11) | NO | PRI | 0 |  |  |
| staff | varchar(150) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| template_text | longtext | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | rx_pay_template_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
