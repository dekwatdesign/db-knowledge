# `eye_examination`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| eye_examination_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| examination_date | date | YES | MUL | NULL |  |  |
| examination_time | time | YES |  | NULL |  |  |
| va1 | varchar(150) | YES |  | NULL |  |  |
| va2 | varchar(150) | YES |  | NULL |  |  |
| vacph1 | varchar(150) | YES |  | NULL |  |  |
| vacph2 | varchar(150) | YES |  | NULL |  |  |
| vacc1 | varchar(150) | YES |  | NULL |  |  |
| vacc2 | varchar(150) | YES |  | NULL |  |  |
| vacccph1 | varchar(150) | YES |  | NULL |  |  |
| vacccph2 | varchar(150) | YES |  | NULL |  |  |
| apptension1 | varchar(150) | YES |  | NULL |  |  |
| apptension2 | varchar(150) | YES |  | NULL |  |  |
| pntension1 | varchar(150) | YES |  | NULL |  |  |
| pntension2 | varchar(150) | YES |  | NULL |  |  |
| eyelid_re | varchar(150) | YES |  | NULL |  |  |
| eyelid_le | varchar(150) | YES |  | NULL |  |  |
| conjunctiva_le | varchar(150) | YES |  | NULL |  |  |
| conjunctiva_re | varchar(150) | YES |  | NULL |  |  |
| cornea_re | varchar(150) | YES |  | NULL |  |  |
| cornea_le | varchar(150) | YES |  | NULL |  |  |
| ac_re | varchar(150) | YES |  | NULL |  |  |
| ac_le | varchar(150) | YES |  | NULL |  |  |
| lens_re | varchar(150) | YES |  | NULL |  |  |
| lens_le | varchar(150) | YES |  | NULL |  |  |
| obj_od_sphere | varchar(150) | YES |  | NULL |  |  |
| obj_od_cyl | varchar(150) | YES |  | NULL |  |  |
| obj_od_axis | varchar(150) | YES |  | NULL |  |  |
| obj_os_sphere | varchar(150) | YES |  | NULL |  |  |
| obj_os_cyl | varchar(150) | YES |  | NULL |  |  |
| obj_os_axis | varchar(150) | YES |  | NULL |  |  |
| subj_od_sphere | varchar(150) | YES |  | NULL |  |  |
| subj_od_cyl | varchar(150) | YES |  | NULL |  |  |
| subj_od_axis | varchar(150) | YES |  | NULL |  |  |
| subj_os_sphere | varchar(150) | YES |  | NULL |  |  |
| subj_os_cyl | varchar(150) | YES |  | NULL |  |  |
| subj_os_axis | varchar(150) | YES |  | NULL |  |  |
| refraction_add | varchar(150) | YES |  | NULL |  |  |
| refraction_pd1 | varchar(150) | YES |  | NULL |  |  |
| refraction_pd2 | varchar(150) | YES |  | NULL |  |  |
| mirror_angle_re | varchar(150) | YES |  | NULL |  |  |
| mirror_angle_le | varchar(150) | YES |  | NULL |  |  |
| mirror_shape_le | varchar(150) | YES |  | NULL |  |  |
| mirror_shape_re | varchar(150) | YES |  | NULL |  |  |
| mirror_insertion_re | varchar(150) | YES |  | NULL |  |  |
| mirror_insertion_le | varchar(150) | YES |  | NULL |  |  |
| mirror_pigmentation_re | varchar(150) | YES |  | NULL |  |  |
| mirror_pigmentation_le | varchar(150) | YES |  | NULL |  |  |
| mirror_cupping_re1 | varchar(150) | YES |  | NULL |  |  |
| mirror_cupping_re2 | varchar(150) | YES |  | NULL |  |  |
| mirror_cupping_le1 | varchar(150) | YES |  | NULL |  |  |
| mirror_cupping_le2 | varchar(150) | YES |  | NULL |  |  |
| fundi_right | varchar(150) | YES |  | NULL |  |  |
| fundi_left | varchar(150) | YES |  | NULL |  |  |
| doctor | varchar(7) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_eye_examination_date | examination_date | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_vn | vn | no | 1 |
| PRIMARY | eye_examination_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
