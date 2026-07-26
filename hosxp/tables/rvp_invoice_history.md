# `rvp_invoice_history`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| rvp_invoice_history_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(12) | YES | MUL | NULL |  |  |
| eclaimaccidentnumber | varchar(100) | YES |  | NULL |  |  |
| eclaimaccidentduplicatenumber | varchar(100) | YES |  | NULL |  |  |
| applicationnohos | int(11) | YES |  | NULL |  |  |
| dispensedatetime | datetime | YES |  | NULL |  |  |
| daybed | int(11) | YES |  | NULL |  |  |
| victimhn | varchar(100) | YES |  | NULL |  |  |
| consider | varchar(100) | YES |  | NULL |  |  |
| comment | varchar(200) | YES |  | NULL |  |  |
| invoiceno | varchar(200) | YES |  | NULL |  |  |
| invoicedate | datetime | YES |  | NULL |  |  |
| sumoneyinvoice | double(15,3) | YES |  | NULL |  |  |
| visitnumber | varchar(100) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_vn | vn | no | 1 |
| PRIMARY | rvp_invoice_history_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
