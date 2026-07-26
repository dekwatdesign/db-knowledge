# `ncr_pnhn`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| pnhn_pn | varchar(8) | YES | MUL | NULL |  |  |
| pnhn_hn | varchar(9) | YES | MUL | NULL |  |  |
| pnhn_last_vn | int(11) | YES |  | NULL |  |  |
| pnhn_last_dept | varchar(20) | YES |  | NULL |  |  |
| pnhn_last_date | varchar(8) | YES |  | NULL |  |  |
| pnhn_last_time | varchar(8) | YES |  | NULL |  |  |
| pnhn_last_an | varchar(8) | YES |  | NULL |  |  |
| pnhn_last_admit | varchar(10) | YES |  | NULL |  |  |
| pnhn_last_doctor | varchar(10) | YES |  | NULL |  |  |
| pnhn_sumipd | varchar(10) | YES |  | NULL |  |  |
| pnhn_sumopd | varchar(10) | YES |  | NULL |  |  |
| pnhn_status | varchar(10) | YES |  | NULL |  |  |
| pnhn_user | varchar(10) | YES |  | NULL |  |  |
| pnhn_date | varchar(10) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| pnhn_hn | pnhn_hn | no | 1 |
| pnhn_pn | pnhn_pn | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
