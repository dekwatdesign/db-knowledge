# `death_autopsy_perform`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hn | varchar(9) | NO | PRI |  |  |  |
| budget_type_id | int(11) | YES |  | NULL |  |  |
| death_transfer | char(1) | YES |  | NULL |  |  |
| autopsy_death_type_id | int(11) | YES |  | NULL |  |  |
| work_no | int(11) | YES |  | NULL |  |  |
| surface_examine | char(1) | YES |  | NULL |  |  |
| surgery_examine | char(1) | YES |  | NULL |  |  |
| biopsy_examine | char(1) | YES |  | NULL |  |  |
| transfer | char(1) | YES |  | NULL |  |  |
| transfer_hospcode | varchar(9) | YES |  | NULL |  |  |
| autopsy_doctor | varchar(10) | YES |  | NULL |  |  |
| autopsy_date | date | YES |  | NULL |  |  |
| autopsy_time | time | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | hn | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
