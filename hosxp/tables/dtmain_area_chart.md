# `dtmain_area_chart`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dtmain_area_chart_id | int(11) | NO | PRI | 0 |  |  |
| dtmain_area_id | int(11) | YES | MUL | NULL |  |  |
| dtmain_area_chart_type_id | int(11) | YES |  | NULL |  |  |
| shape_class_name | varchar(200) | YES |  | NULL |  |  |
| teeth_number | int(11) | YES |  | NULL |  |  |
| shape_xml_data | longtext | YES |  | NULL |  |  |
| doctor_code | varchar(10) | YES |  | NULL |  |  |
| entry_datetime | datetime | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| shape_dtp_data | longblob | YES |  | NULL |  |  |
| zone_a_color | int(11) | YES |  | NULL |  |  |
| zone_b_color | int(11) | YES |  | NULL |  |  |
| zone_c_color | int(11) | YES |  | NULL |  |  |
| zone_d_color | int(11) | YES |  | NULL |  |  |
| zone_e_color | int(11) | YES |  | NULL |  |  |
| zone_f_color | int(11) | YES |  | NULL |  |  |
| teeth_docwidth | double(22,5) | YES |  | NULL |  |  |
| teeth_docheight | double(22,5) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_area_id | dtmain_area_id | no | 1 |
| PRIMARY | dtmain_area_chart_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
