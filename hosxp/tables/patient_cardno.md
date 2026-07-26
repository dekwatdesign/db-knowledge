# `patient_cardno`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_cardno_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| cardtype | char(2) | YES |  | NULL |  |  |
| cardno | varchar(50) | YES | MUL | NULL |  |  |
| expire_date | date | YES |  | NULL |  |  |
| remark | varchar(250) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hn | hn | no | 1 |
| ix_hn_cardtype_no | hn | yes | 1 |
| ix_hn_cardtype_no | cardtype | yes | 2 |
| ix_hn_cardtype_no | cardno | yes | 3 |
| ix_hn_cardtype_no_index | cardno | yes | 1 |
| ix_hn_cardtype_no_index | cardtype | yes | 2 |
| ix_hn_cardtype_no_index | hn | yes | 3 |
| PRIMARY | patient_cardno_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
