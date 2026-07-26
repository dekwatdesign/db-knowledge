# `cm_dm_cmbty_dental_screen`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cm_dm_cmbty_dental_screen_id | int(11) | NO | PRI | 0 |  |  |
| cm_dm_cmbty_screen_id | int(11) | YES | MUL | NULL |  |  |
| found_tartar | char(1) | YES |  | NULL |  |  |
| found_periodontal_disease | char(1) | YES |  | NULL |  |  |
| oral_cavity_educate | char(1) | YES |  | NULL |  |  |
| decayed_tooth_count | int(11) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| update_staff | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_screen_id | cm_dm_cmbty_screen_id | no | 1 |
| PRIMARY | cm_dm_cmbty_dental_screen_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
