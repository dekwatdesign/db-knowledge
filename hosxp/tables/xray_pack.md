# `xray_pack`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| xray_report_xn | int(11) | NO | PRI | 0 |  |  |
| pack_accession_no | varchar(32) | NO | PRI |  |  |  |
| xray_pack_status | char(1) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_xn | xray_report_xn | no | 1 |
| PRIMARY | xray_report_xn | yes | 1 |
| PRIMARY | pack_accession_no | yes | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
