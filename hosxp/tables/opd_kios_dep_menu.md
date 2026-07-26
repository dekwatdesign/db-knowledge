# `opd_kios_dep_menu`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opd_kios_dep_menu_id | int(11) | NO | PRI | 0 |  |  |
| depcode | char(3) | YES | UNI | NULL |  |  |
| description | varchar(200) | YES |  | NULL |  |  |
| ovstist | char(2) | YES |  | NULL |  |  |
| spclty | char(2) | YES |  | NULL |  |  |
| button_caption | varchar(200) | YES |  | NULL |  |  |
| symptom | varchar(250) | YES |  | NULL |  |  |
| print_form_name | varchar(200) | YES |  | NULL |  |  |
| order_no | int(11) | YES |  | NULL |  |  |
| button_width | int(11) | YES |  | NULL |  |  |
| button_height | int(11) | YES |  | NULL |  |  |
| font_name | varchar(150) | YES |  | NULL |  |  |
| font_size | int(11) | YES |  | NULL |  |  |
| font_color | int(11) | YES |  | NULL |  |  |
| hospital_department_id | int(11) | YES |  | NULL |  |  |
| computer_name | varchar(150) | YES | MUL | NULL |  |  |
| use_opd_qs_location_queue | char(1) | YES |  | NULL |  |  |
| opd_qs_location_id | int(11) | YES |  | NULL |  |  |
| opd_qs_room_id | int(11) | YES |  | NULL |  |  |
| ovstost | char(2) | YES |  | NULL |  |  |
| fixed_pttype | char(1) | YES |  | NULL |  |  |
| fixed_pttype_code | varchar(2) | YES |  | NULL |  |  |
| fixed_pt_priority | char(1) | YES |  | NULL |  |  |
| fixed_pt_priority_code | int(11) | YES |  | NULL |  |  |
| no_print_default_form | char(1) | YES |  | NULL |  |  |
| fixed_sex | char(1) | YES |  | NULL |  |  |
| fixed_sex_code | char(1) | YES |  | NULL |  |  |
| fixed_age | char(1) | YES |  | NULL |  |  |
| fixed_age_min | int(11) | YES |  | NULL |  |  |
| fixed_age_max | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_computer_name | computer_name | no | 1 |
| ix_computer_name_depcode | computer_name | yes | 1 |
| ix_computer_name_depcode | depcode | yes | 2 |
| ix_depcode | depcode | yes | 1 |
| PRIMARY | opd_kios_dep_menu_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
