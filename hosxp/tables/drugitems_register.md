# `drugitems_register`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| drugitems_register_id | int(11) | NO | PRI | 0 |  |  |
| regno | varchar(20) | YES | MUL | NULL |  |  |
| t_code | varchar(20) | YES |  | NULL |  |  |
| gpocode | varchar(15) | YES |  | NULL |  |  |
| gpocheck | varchar(20) | YES |  | NULL |  |  |
| comp | varchar(150) | YES | MUL | NULL |  |  |
| tradename | varchar(250) | YES | MUL | NULL |  |  |
| dosage_form | varchar(100) | YES | MUL | NULL |  |  |
| dgdsfnm | varchar(100) | YES |  | NULL |  |  |
| unit | varchar(50) | YES |  | NULL |  |  |
| drugname | varchar(150) | YES | MUL | NULL |  |  |
| strength | varchar(100) | YES |  | NULL |  |  |
| manufacturer | varchar(100) | YES | MUL | NULL |  |  |
| country | varchar(100) | YES |  | NULL |  |  |
| std_code | varchar(35) | YES | MUL | NULL |  |  |
| un_spsc | varchar(35) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_comp | comp | no | 1 |
| ix_dosage_form | dosage_form | no | 1 |
| ix_drugname | drugname | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_manufacturer | manufacturer | no | 1 |
| ix_regno | regno | no | 1 |
| ix_std_code | std_code | no | 1 |
| ix_tradename | tradename | no | 1 |
| ix_unique | regno | yes | 1 |
| ix_unique | t_code | yes | 2 |
| PRIMARY | drugitems_register_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "drugitems_register_id": 1,
    "regno": "110100430103",
    "t_code": "11010043010301",
    "gpocode": "110100430103",
    "gpocheck": "NON-VMI",
    "comp": "องค์การเภสัชกรรม",
    "tradename": "ALUMINA AND MAGNESIA TABLETS 100's",
    "dosage_form": "COMPRESSED TABLET",
    "dgdsfnm": "TABLET, ORAL",
    "unit": "1 TABLET",
    "drugname": "ALUMINIUM HYDROXIDE+MAGNESIUM HYDROXIDE",
    "strength": " UNDEFINED",
    "manufacturer": "",
    "country": "",
    "std_code": "201020110019999920381506",
    "un_spsc": "200016203999",
    "hos_guid": ""
  },
  {
    "drugitems_register_id": 2,
    "regno": "110100430212",
    "t_code": "11010043021201",
    "gpocode": "110100430212",
    "gpocheck": "VMI",
    "comp": "องค์การเภสัชกรรม",
    "tradename": "ALUMINIUM HYDROXIDE TABLETS 500 mg 1000's",
    "dosage_form": "TABLET",
    "dgdsfnm": "TABLET, ORAL",
    "unit": "1 TABLET",
    "drugname": "ALUMINIUM HYDROXIDE",
    "strength": "500 MG/1 CAP. OR TAB.",
    "manufacturer": "",
    "country": "",
    "std_code": "101206000004493120381506",
    "un_spsc": "102333203691",
    "hos_guid": ""
  },
  {
    "drugitems_register_id": 3,
    "regno": "110100820112",
    "t_code": "11010082011201",
    "gpocode": "110100820112",
    "gpocheck": "3 Checked but not DA",
    "comp": "องค์การเภสัชกรรม",
    "tradename": "ASPIRIN TABLETS 60 mg 1000's",
    "dosage_form": "TABLET",
    "dgdsfnm": "TABLET, ORAL",
    "unit": "1 TABLET",
    "drugname": "ASPIRIN",
    "strength": "60 MG/1 CAP. OR TAB.",
    "manufacturer": "",
    "country": "",
    "std_code": "100736000003910120381506",
    "un_spsc": "101186203068",
    "hos_guid": ""
  },
  {
    "drugitems_register_id": 4,
    "regno": "110100840111",
    "t_code": "11010084011101",
    "gpocode": "110100840111",
    "gpocheck": "NON-VMI",
    "comp": "องค์การเภสัชกรรม",
    "tradename": "ATENOLOL TABLETS 100 mg 50x10's",
    "dosage_form": "",
    "dgdsfnm": "TABLET, ORAL",
    "unit": "1 TABLET",
    "drugname": "ATENOLOL",
    "strength": "100 MG/1 CAP. OR TAB.",
    "manufacturer": "",
    "country": "",
    "std_code": "100439000004021220381506",
    "un_spsc": "100765203679",
    "hos_guid": ""
  },
  {
    "drugitems_register_id": 5,
    "regno": "110100840112",
    "t_code": "11010084011201",
    "gpocode": "110100840112",
    "gpocheck": "NON-VMI",
    "comp": "องค์การเภสัชกรรม",
    "tradename": "ATENOLOL TABLETS 100 mg 250's",
    "dosage_form": "",
    "dgdsfnm": "TABLET, ORAL",
    "unit": "1 TABLET",
    "drugname": "ATENOLOL",
    "strength": "100 MG/1 CAP. OR TAB.",
    "manufacturer": "",
    "country": "",
    "std_code": "100439000004021220381506",
    "un_spsc": "100765203679",
    "hos_guid": ""
  },
  {
    "drugitems_register_id": 6,
    "regno": "110100840113",
    "t_code": "11010084011301",
    "gpocode": "110100840113",
    "gpocheck": "NON-VMI",
    "comp": "องค์การเภสัชกรรม",
    "tradename": "ATENOLOL TABLETS 100 mg 500's",
    "dosage_form": "",
    "dgdsfnm": "TABLET, ORAL",
    "unit": "1 TABLET",
    "drugname": "ATENOLOL",
    "strength": "100 MG/1 CAP. OR TAB.",
    "manufacturer": "",
    "country": "",
    "std_code": "100439000004021220381506",
    "un_spsc": "100765203679",
    "hos_guid": ""
  },
  {
    "drugitems_register_id": 7,
    "regno": "110101320113",
    "t_code": "11010132011301",
    "gpocode": "110101320113",
    "gpocheck": "VMI",
    "comp": "องค์การเภสัชกรรม",
    "tradename": "BISACODYL TABLETS 5 mg 1000's",
    "dosage_form": "TABLET",
    "dgdsfnm": "TABLET, ORAL",
    "unit": "1 TABLET",
    "drugname": "BISACODYL",
    "strength": "5 MG/1 CAP. OR TAB.",
    "manufacturer": "",
    "country": "",
    "std_code": "101255000003521120381506",
    "un_spsc": "102430203669",
    "hos_guid": ""
  },
  {
    "drugitems_register_id": 8,
    "regno": "110102330122",
    "t_code": "11010233012201",
    "gpocode": "110102330122",
    "gpocheck": "NON-VMI",
    "comp": "องค์การเภสัชกรรม",
    "tradename": "CHLORPHENIRAMINE TABLETS 2 mg 200's",
    "dosage_form": "COMPRESSED TABLET",
    "dgdsfnm": "TABLET, ORAL",
    "unit": "1 TABLET",
    "drugname": "CHLORPHENIRAMINE MALEATE",
    "strength": "2 MG/1 CAP. OR TAB.",
    "manufacturer": "",
    "country": "",
    "std_code": "100008190003361120381506",
    "un_spsc": "100012203666",
    "hos_guid": ""
  }
]
```
