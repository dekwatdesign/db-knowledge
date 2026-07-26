# `hsk_home_menu`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| menu_id | int(11) | NO | PRI | 0 |  |  |
| name_menu_th | varchar(255) | YES |  | NULL |  |  |
| name_menu_en | varchar(255) | YES |  | NULL |  |  |
| icon_menu | varchar(255) | YES |  | NULL |  |  |
| link_menu | varchar(255) | YES |  | NULL |  |  |
| status_menu | varchar(1) | YES |  | NULL |  |  |
| menu_access | varchar(255) | YES |  | NULL |  |  |
| about | varchar(255) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | menu_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "menu_id": 1,
    "name_menu_th": "งานผู้ป่วยนอก",
    "name_menu_en": "Opd (HSK)",
    "icon_menu": "opd.png",
    "link_menu": "web_emr_opdAll.php",
    "status_menu": "Y",
    "menu_access": "HSK_MENU_OPD",
    "about": "ดูประวัติการรับบริการผู้ป่วยนอก/บันทึก CGI-S"
  },
  {
    "menu_id": 2,
    "name_menu_th": "งานจิตวิทยา",
    "name_menu_en": "Psychology (HSK)",
    "icon_menu": "psychology.png",
    "link_menu": "web_reg_psy.php",
    "status_menu": "Y",
    "menu_access": "HSK_MENU_PSYCHOLOGY",
    "about": "บันทึกเครื่องมือที่ใช้ในการทำหัตถการจิตวิทยา"
  },
  {
    "menu_id": 3,
    "name_menu_th": "งานเภสัชกรรม",
    "name_menu_en": "Pharmacy (HSK)",
    "icon_menu": "pharmacy.png",
    "link_menu": "web_pharmacy.php",
    "status_menu": "Y",
    "menu_access": "HSK_MENU_PHARMACY",
    "about": "บันทึก PMH/Drug Profile/Progress Note เภสัชกร"
  },
  {
    "menu_id": 4,
    "name_menu_th": "งานผู้ป่วยใน",
    "name_menu_en": "Ipd (HSK)",
    "icon_menu": "ipd.png",
    "link_menu": "web_ipd.php",
    "status_menu": "Y",
    "menu_access": "HSK_MENU_IPD",
    "about": "บันทึกการดูแลรักษา/การให้บริการผู้ป่วยใน"
  },
  {
    "menu_id": 5,
    "name_menu_th": "งานจิตเวชชุมชน",
    "name_menu_en": "Community Psychiatry",
    "icon_menu": "Community.png",
    "link_menu": "web_community_register.php?tab=home",
    "status_menu": "Y",
    "menu_access": "HSK_MENU_COMMUNITYPSY",
    "about": "ลงทะเบียนดูแลติดตามผู้ป่วยหลังจำหน่าย"
  },
  {
    "menu_id": 6,
    "name_menu_th": "งานเวชระเบียน",
    "name_menu_en": "Medical record (HSK)",
    "icon_menu": "Medical_record.png",
    "link_menu": "#",
    "status_menu": "N",
    "menu_access": "HSK_MENU_MEDICALRECORD",
    "about": "-"
  },
  {
    "menu_id": 7,
    "name_menu_th": "งานเยี่ยมบ้าน",
    "name_menu_en": "Home health (HSK)",
    "icon_menu": "Home_health.jpg",
    "link_menu": "web_reg_chumchon.php",
    "status_menu": "N",
    "menu_access": "HSK_MENU_HOMEHEALTH",
    "about": "บันทึกติดตาม/ดูแลรักษา/งานเยี่ยมบ้าน"
  },
  {
    "menu_id": 8,
    "name_menu_th": "จ่ายยาผู้ป่วยใน",
    "name_menu_en": "Dispense (HSK)",
    "icon_menu": "Dispense.png",
    "link_menu": "mobile_home.php?page=ward_drug",
    "status_menu": "Y",
    "menu_access": "HSK_MENU_DISPENSE",
    "about": "บันทึกจ่ายยาผู้ป่วยใน"
  }
]
```
