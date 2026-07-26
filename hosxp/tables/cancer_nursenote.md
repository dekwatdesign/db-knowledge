# `cancer_nursenote`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hos_guid | varchar(38) | NO | PRI |  |  |  |
| nursenote_id | int(11) | NO | PRI | 0 |  |  |
| nursenote_date | datetime | YES |  | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| nursenote_AdmissionAssessment | int(11) | YES |  | NULL |  |  |
| nursenote_WalkInType | int(11) | YES |  | NULL |  |  |
| nursenote_PatientType | int(11) | YES |  | NULL |  |  |
| nursenote_PatientTypeRemark | varchar(250) | YES |  | NULL |  |  |
| nursernote_Diag | text | YES |  | NULL |  |  |
| nursenote_SupportInfo | text | YES |  | NULL |  |  |
| nursenote_curdepartment | char(3) | YES |  | NULL |  |  |
| nursenote_curDepartmenttime | datetime | YES |  | NULL |  |  |
| nursenote_WalkOutType | int(11) | YES |  | NULL |  |  |
| nursenote_SpecialType | char(1) | YES |  | NULL |  |  |
| nursenote_NurseSave | varchar(6) | YES |  | NULL |  |  |
| nursenote_NureSavetime | datetime | YES |  | NULL |  |  |
| nursenote_rt_list | varchar(100) | YES |  | NULL |  |  |
| nursenote_icrt_list | varchar(100) | YES |  | NULL |  |  |
| nursenote_icrt_list_after | varchar(100) | YES |  | NULL |  |  |
| nursenote_rt_list_text | varchar(255) | YES |  | NULL |  |  |
| nursenote_icrt_list_text | varchar(255) | YES |  | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | hos_guid | yes | 1 |
| PRIMARY | nursenote_id | yes | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "hos_guid": "{09293F58-EEB0-4511-AF36-3630B03E330E}",
    "nursenote_id": 1,
    "nursenote_date": null,
    "hn": "570001607",
    "vn": "541018122954",
    "nursenote_AdmissionAssessment": null,
    "nursenote_WalkInType": null,
    "nursenote_PatientType": null,
    "nursenote_PatientTypeRemark": null,
    "nursernote_Diag": null,
    "nursenote_SupportInfo": null,
    "nursenote_curdepartment": null,
    "nursenote_curDepartmenttime": null,
    "nursenote_WalkOutType": null,
    "nursenote_SpecialType": null,
    "nursenote_NurseSave": null,
    "nursenote_NureSavetime": null,
    "nursenote_rt_list": null,
    "nursenote_icrt_list": null,
    "nursenote_icrt_list_after": null,
    "nursenote_rt_list_text": null,
    "nursenote_icrt_list_text": null,
    "hos_guid_ext": null
  }
]
```
