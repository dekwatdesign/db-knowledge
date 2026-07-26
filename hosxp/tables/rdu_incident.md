# `rdu_incident`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| rdu_incident_id | int(11) | NO | PRI | 0 |  |  |
| rdu_kpi_type_name_list | longtext | YES |  | NULL |  |  |
| rdu_kpi_type_massage_list | longtext | YES |  | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| vn | varchar(13) | YES | UNI | NULL |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| create_datetime | datetime | YES |  | NULL |  |  |
| flag_kpi_1 | char(1) | YES |  | NULL |  |  |
| flag_kpi_2 | char(1) | YES |  | NULL |  |  |
| flag_kpi_3 | char(1) | YES |  | NULL |  |  |
| flag_kpi_4 | char(1) | YES |  | NULL |  |  |
| flag_kpi_5 | char(1) | YES |  | NULL |  |  |
| flag_kpi_6 | char(1) | YES |  | NULL |  |  |
| flag_kpi_7 | char(1) | YES |  | NULL |  |  |
| flag_kpi_8 | char(1) | YES |  | NULL |  |  |
| flag_kpi_9 | char(1) | YES |  | NULL |  |  |
| flag_kpi_10 | char(1) | YES |  | NULL |  |  |
| flag_kpi_11 | char(1) | YES |  | NULL |  |  |
| flag_kpi_12 | char(1) | YES |  | NULL |  |  |
| flag_kpi_13 | char(1) | YES |  | NULL |  |  |
| flag_kpi_14 | char(1) | YES |  | NULL |  |  |
| flag_kpi_15 | char(1) | YES |  | NULL |  |  |
| flag_kpi_16 | char(1) | YES |  | NULL |  |  |
| flag_kpi_17 | char(1) | YES |  | NULL |  |  |
| flag_kpi_18 | char(1) | YES |  | NULL |  |  |
| flag_kpi_19 | char(1) | YES |  | NULL |  |  |
| flag_kpi_20 | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_index_an | an | no | 1 |
| ix_index_hn | hn | no | 1 |
| ix_iu_rdu_incident_vn | vn | yes | 1 |
| PRIMARY | rdu_incident_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
